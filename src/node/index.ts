// https://www.terraform.io/docs/providers/consul/r/node
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NodeConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/consul/r/node#address Node#address}
  */
  readonly address: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/consul/r/node#datacenter Node#datacenter}
  */
  readonly datacenter?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/consul/r/node#id Node#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/consul/r/node#meta Node#meta}
  */
  readonly meta?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/consul/r/node#name Node#name}
  */
  readonly name: string;
  /**
  * The partition the node is associated with.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/consul/r/node#partition Node#partition}
  */
  readonly partition?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/consul/r/node#token Node#token}
  */
  readonly token?: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/consul/r/node consul_node}
*/
export class Node extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "consul_node";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/consul/r/node consul_node} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NodeConfig
  */
  public constructor(scope: Construct, id: string, config: NodeConfig) {
    super(scope, id, {
      terraformResourceType: 'consul_node',
      terraformGeneratorMetadata: {
        providerName: 'consul',
        providerVersion: '2.17.0',
        providerVersionConstraint: '~> 2.16'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._address = config.address;
    this._datacenter = config.datacenter;
    this._id = config.id;
    this._meta = config.meta;
    this._name = config.name;
    this._partition = config.partition;
    this._token = config.token;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // address - computed: false, optional: false, required: true
  private _address?: string; 
  public get address() {
    return this.getStringAttribute('address');
  }
  public set address(value: string) {
    this._address = value;
  }
  // Temporarily expose input value. Use with caution.
  public get addressInput() {
    return this._address;
  }

  // datacenter - computed: true, optional: true, required: false
  private _datacenter?: string; 
  public get datacenter() {
    return this.getStringAttribute('datacenter');
  }
  public set datacenter(value: string) {
    this._datacenter = value;
  }
  public resetDatacenter() {
    this._datacenter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datacenterInput() {
    return this._datacenter;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // meta - computed: false, optional: true, required: false
  private _meta?: { [key: string]: string }; 
  public get meta() {
    return this.getStringMapAttribute('meta');
  }
  public set meta(value: { [key: string]: string }) {
    this._meta = value;
  }
  public resetMeta() {
    this._meta = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metaInput() {
    return this._meta;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // partition - computed: false, optional: true, required: false
  private _partition?: string; 
  public get partition() {
    return this.getStringAttribute('partition');
  }
  public set partition(value: string) {
    this._partition = value;
  }
  public resetPartition() {
    this._partition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get partitionInput() {
    return this._partition;
  }

  // token - computed: false, optional: true, required: false
  private _token?: string; 
  public get token() {
    return this.getStringAttribute('token');
  }
  public set token(value: string) {
    this._token = value;
  }
  public resetToken() {
    this._token = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenInput() {
    return this._token;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      address: cdktf.stringToTerraform(this._address),
      datacenter: cdktf.stringToTerraform(this._datacenter),
      id: cdktf.stringToTerraform(this._id),
      meta: cdktf.hashMapper(cdktf.stringToTerraform)(this._meta),
      name: cdktf.stringToTerraform(this._name),
      partition: cdktf.stringToTerraform(this._partition),
      token: cdktf.stringToTerraform(this._token),
    };
  }
}
