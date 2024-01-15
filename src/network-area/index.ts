// https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/network_area
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NetworkAreaConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/network_area#datacenter NetworkArea#datacenter}
  */
  readonly datacenter?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/network_area#id NetworkArea#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/network_area#peer_datacenter NetworkArea#peer_datacenter}
  */
  readonly peerDatacenter: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/network_area#retry_join NetworkArea#retry_join}
  */
  readonly retryJoin?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/network_area#token NetworkArea#token}
  */
  readonly token?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/network_area#use_tls NetworkArea#use_tls}
  */
  readonly useTls?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/network_area consul_network_area}
*/
export class NetworkArea extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "consul_network_area";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a NetworkArea resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the NetworkArea to import
  * @param importFromId The id of the existing NetworkArea that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/network_area#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the NetworkArea to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "consul_network_area", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/network_area consul_network_area} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NetworkAreaConfig
  */
  public constructor(scope: Construct, id: string, config: NetworkAreaConfig) {
    super(scope, id, {
      terraformResourceType: 'consul_network_area',
      terraformGeneratorMetadata: {
        providerName: 'consul',
        providerVersion: '2.20.0',
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
    this._datacenter = config.datacenter;
    this._id = config.id;
    this._peerDatacenter = config.peerDatacenter;
    this._retryJoin = config.retryJoin;
    this._token = config.token;
    this._useTls = config.useTls;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // peer_datacenter - computed: false, optional: false, required: true
  private _peerDatacenter?: string; 
  public get peerDatacenter() {
    return this.getStringAttribute('peer_datacenter');
  }
  public set peerDatacenter(value: string) {
    this._peerDatacenter = value;
  }
  // Temporarily expose input value. Use with caution.
  public get peerDatacenterInput() {
    return this._peerDatacenter;
  }

  // retry_join - computed: false, optional: true, required: false
  private _retryJoin?: string[]; 
  public get retryJoin() {
    return this.getListAttribute('retry_join');
  }
  public set retryJoin(value: string[]) {
    this._retryJoin = value;
  }
  public resetRetryJoin() {
    this._retryJoin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retryJoinInput() {
    return this._retryJoin;
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

  // use_tls - computed: false, optional: true, required: false
  private _useTls?: boolean | cdktf.IResolvable; 
  public get useTls() {
    return this.getBooleanAttribute('use_tls');
  }
  public set useTls(value: boolean | cdktf.IResolvable) {
    this._useTls = value;
  }
  public resetUseTls() {
    this._useTls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useTlsInput() {
    return this._useTls;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      datacenter: cdktf.stringToTerraform(this._datacenter),
      id: cdktf.stringToTerraform(this._id),
      peer_datacenter: cdktf.stringToTerraform(this._peerDatacenter),
      retry_join: cdktf.listMapper(cdktf.stringToTerraform, false)(this._retryJoin),
      token: cdktf.stringToTerraform(this._token),
      use_tls: cdktf.booleanToTerraform(this._useTls),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      datacenter: {
        value: cdktf.stringToHclTerraform(this._datacenter),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      peer_datacenter: {
        value: cdktf.stringToHclTerraform(this._peerDatacenter),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      retry_join: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._retryJoin),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      token: {
        value: cdktf.stringToHclTerraform(this._token),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      use_tls: {
        value: cdktf.booleanToHclTerraform(this._useTls),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
