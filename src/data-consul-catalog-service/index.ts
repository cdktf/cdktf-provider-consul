/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/consul/2.22.1/docs/data-sources/catalog_service
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataConsulCatalogServiceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.1/docs/data-sources/catalog_service#datacenter DataConsulCatalogService#datacenter}
  */
  readonly datacenter?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.1/docs/data-sources/catalog_service#filter DataConsulCatalogService#filter}
  */
  readonly filter?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.1/docs/data-sources/catalog_service#id DataConsulCatalogService#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.1/docs/data-sources/catalog_service#name DataConsulCatalogService#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.1/docs/data-sources/catalog_service#tag DataConsulCatalogService#tag}
  */
  readonly tag?: string;
  /**
  * query_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.1/docs/data-sources/catalog_service#query_options DataConsulCatalogService#query_options}
  */
  readonly queryOptions?: DataConsulCatalogServiceQueryOptions[] | cdktf.IResolvable;
}
export interface DataConsulCatalogServiceService {
}

export function dataConsulCatalogServiceServiceToTerraform(struct?: DataConsulCatalogServiceService): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataConsulCatalogServiceServiceToHclTerraform(struct?: DataConsulCatalogServiceService): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataConsulCatalogServiceServiceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataConsulCatalogServiceService | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataConsulCatalogServiceService | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // address - computed: true, optional: false, required: false
  public get address() {
    return this.getStringAttribute('address');
  }

  // create_index - computed: true, optional: false, required: false
  public get createIndex() {
    return this.getStringAttribute('create_index');
  }

  // enable_tag_override - computed: true, optional: false, required: false
  public get enableTagOverride() {
    return this.getStringAttribute('enable_tag_override');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // meta - computed: true, optional: false, required: false
  private _meta = new cdktf.StringMap(this, "meta");
  public get meta() {
    return this._meta;
  }

  // modify_index - computed: true, optional: false, required: false
  public get modifyIndex() {
    return this.getStringAttribute('modify_index');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // node_address - computed: true, optional: false, required: false
  public get nodeAddress() {
    return this.getStringAttribute('node_address');
  }

  // node_id - computed: true, optional: false, required: false
  public get nodeId() {
    return this.getStringAttribute('node_id');
  }

  // node_meta - computed: true, optional: false, required: false
  private _nodeMeta = new cdktf.StringMap(this, "node_meta");
  public get nodeMeta() {
    return this._nodeMeta;
  }

  // node_name - computed: true, optional: false, required: false
  public get nodeName() {
    return this.getStringAttribute('node_name');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getStringAttribute('port');
  }

  // tagged_addresses - computed: true, optional: false, required: false
  private _taggedAddresses = new cdktf.StringMap(this, "tagged_addresses");
  public get taggedAddresses() {
    return this._taggedAddresses;
  }

  // tags - computed: true, optional: false, required: false
  public get tags() {
    return this.getListAttribute('tags');
  }
}

export class DataConsulCatalogServiceServiceList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataConsulCatalogServiceServiceOutputReference {
    return new DataConsulCatalogServiceServiceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataConsulCatalogServiceQueryOptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.1/docs/data-sources/catalog_service#allow_stale DataConsulCatalogService#allow_stale}
  */
  readonly allowStale?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.1/docs/data-sources/catalog_service#datacenter DataConsulCatalogService#datacenter}
  */
  readonly datacenter?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.1/docs/data-sources/catalog_service#namespace DataConsulCatalogService#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.1/docs/data-sources/catalog_service#near DataConsulCatalogService#near}
  */
  readonly near?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.1/docs/data-sources/catalog_service#node_meta DataConsulCatalogService#node_meta}
  */
  readonly nodeMeta?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.1/docs/data-sources/catalog_service#partition DataConsulCatalogService#partition}
  */
  readonly partition?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.1/docs/data-sources/catalog_service#require_consistent DataConsulCatalogService#require_consistent}
  */
  readonly requireConsistent?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.1/docs/data-sources/catalog_service#token DataConsulCatalogService#token}
  */
  readonly token?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.1/docs/data-sources/catalog_service#wait_index DataConsulCatalogService#wait_index}
  */
  readonly waitIndex?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.1/docs/data-sources/catalog_service#wait_time DataConsulCatalogService#wait_time}
  */
  readonly waitTime?: string;
}

export function dataConsulCatalogServiceQueryOptionsToTerraform(struct?: DataConsulCatalogServiceQueryOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_stale: cdktf.booleanToTerraform(struct!.allowStale),
    datacenter: cdktf.stringToTerraform(struct!.datacenter),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    near: cdktf.stringToTerraform(struct!.near),
    node_meta: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.nodeMeta),
    partition: cdktf.stringToTerraform(struct!.partition),
    require_consistent: cdktf.booleanToTerraform(struct!.requireConsistent),
    token: cdktf.stringToTerraform(struct!.token),
    wait_index: cdktf.numberToTerraform(struct!.waitIndex),
    wait_time: cdktf.stringToTerraform(struct!.waitTime),
  }
}


export function dataConsulCatalogServiceQueryOptionsToHclTerraform(struct?: DataConsulCatalogServiceQueryOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow_stale: {
      value: cdktf.booleanToHclTerraform(struct!.allowStale),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    datacenter: {
      value: cdktf.stringToHclTerraform(struct!.datacenter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    near: {
      value: cdktf.stringToHclTerraform(struct!.near),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    node_meta: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.nodeMeta),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    partition: {
      value: cdktf.stringToHclTerraform(struct!.partition),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    require_consistent: {
      value: cdktf.booleanToHclTerraform(struct!.requireConsistent),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    token: {
      value: cdktf.stringToHclTerraform(struct!.token),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    wait_index: {
      value: cdktf.numberToHclTerraform(struct!.waitIndex),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    wait_time: {
      value: cdktf.stringToHclTerraform(struct!.waitTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataConsulCatalogServiceQueryOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataConsulCatalogServiceQueryOptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowStale !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowStale = this._allowStale;
    }
    if (this._datacenter !== undefined) {
      hasAnyValues = true;
      internalValueResult.datacenter = this._datacenter;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._near !== undefined) {
      hasAnyValues = true;
      internalValueResult.near = this._near;
    }
    if (this._nodeMeta !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeMeta = this._nodeMeta;
    }
    if (this._partition !== undefined) {
      hasAnyValues = true;
      internalValueResult.partition = this._partition;
    }
    if (this._requireConsistent !== undefined) {
      hasAnyValues = true;
      internalValueResult.requireConsistent = this._requireConsistent;
    }
    if (this._token !== undefined) {
      hasAnyValues = true;
      internalValueResult.token = this._token;
    }
    if (this._waitIndex !== undefined) {
      hasAnyValues = true;
      internalValueResult.waitIndex = this._waitIndex;
    }
    if (this._waitTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.waitTime = this._waitTime;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataConsulCatalogServiceQueryOptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowStale = undefined;
      this._datacenter = undefined;
      this._namespace = undefined;
      this._near = undefined;
      this._nodeMeta = undefined;
      this._partition = undefined;
      this._requireConsistent = undefined;
      this._token = undefined;
      this._waitIndex = undefined;
      this._waitTime = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowStale = value.allowStale;
      this._datacenter = value.datacenter;
      this._namespace = value.namespace;
      this._near = value.near;
      this._nodeMeta = value.nodeMeta;
      this._partition = value.partition;
      this._requireConsistent = value.requireConsistent;
      this._token = value.token;
      this._waitIndex = value.waitIndex;
      this._waitTime = value.waitTime;
    }
  }

  // allow_stale - computed: false, optional: true, required: false
  private _allowStale?: boolean | cdktf.IResolvable; 
  public get allowStale() {
    return this.getBooleanAttribute('allow_stale');
  }
  public set allowStale(value: boolean | cdktf.IResolvable) {
    this._allowStale = value;
  }
  public resetAllowStale() {
    this._allowStale = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowStaleInput() {
    return this._allowStale;
  }

  // datacenter - computed: false, optional: true, required: false
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

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // near - computed: false, optional: true, required: false
  private _near?: string; 
  public get near() {
    return this.getStringAttribute('near');
  }
  public set near(value: string) {
    this._near = value;
  }
  public resetNear() {
    this._near = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nearInput() {
    return this._near;
  }

  // node_meta - computed: false, optional: true, required: false
  private _nodeMeta?: { [key: string]: string }; 
  public get nodeMeta() {
    return this.getStringMapAttribute('node_meta');
  }
  public set nodeMeta(value: { [key: string]: string }) {
    this._nodeMeta = value;
  }
  public resetNodeMeta() {
    this._nodeMeta = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeMetaInput() {
    return this._nodeMeta;
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

  // require_consistent - computed: false, optional: true, required: false
  private _requireConsistent?: boolean | cdktf.IResolvable; 
  public get requireConsistent() {
    return this.getBooleanAttribute('require_consistent');
  }
  public set requireConsistent(value: boolean | cdktf.IResolvable) {
    this._requireConsistent = value;
  }
  public resetRequireConsistent() {
    this._requireConsistent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requireConsistentInput() {
    return this._requireConsistent;
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

  // wait_index - computed: false, optional: true, required: false
  private _waitIndex?: number; 
  public get waitIndex() {
    return this.getNumberAttribute('wait_index');
  }
  public set waitIndex(value: number) {
    this._waitIndex = value;
  }
  public resetWaitIndex() {
    this._waitIndex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get waitIndexInput() {
    return this._waitIndex;
  }

  // wait_time - computed: false, optional: true, required: false
  private _waitTime?: string; 
  public get waitTime() {
    return this.getStringAttribute('wait_time');
  }
  public set waitTime(value: string) {
    this._waitTime = value;
  }
  public resetWaitTime() {
    this._waitTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get waitTimeInput() {
    return this._waitTime;
  }
}

export class DataConsulCatalogServiceQueryOptionsList extends cdktf.ComplexList {
  public internalValue? : DataConsulCatalogServiceQueryOptions[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataConsulCatalogServiceQueryOptionsOutputReference {
    return new DataConsulCatalogServiceQueryOptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.1/docs/data-sources/catalog_service consul_catalog_service}
*/
export class DataConsulCatalogService extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "consul_catalog_service";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataConsulCatalogService resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataConsulCatalogService to import
  * @param importFromId The id of the existing DataConsulCatalogService that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.1/docs/data-sources/catalog_service#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataConsulCatalogService to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "consul_catalog_service", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.1/docs/data-sources/catalog_service consul_catalog_service} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataConsulCatalogServiceConfig
  */
  public constructor(scope: Construct, id: string, config: DataConsulCatalogServiceConfig) {
    super(scope, id, {
      terraformResourceType: 'consul_catalog_service',
      terraformGeneratorMetadata: {
        providerName: 'consul',
        providerVersion: '2.22.1',
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
    this._filter = config.filter;
    this._id = config.id;
    this._name = config.name;
    this._tag = config.tag;
    this._queryOptions.internalValue = config.queryOptions;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // datacenter - computed: false, optional: true, required: false
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

  // filter - computed: false, optional: true, required: false
  private _filter?: string; 
  public get filter() {
    return this.getStringAttribute('filter');
  }
  public set filter(value: string) {
    this._filter = value;
  }
  public resetFilter() {
    this._filter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter;
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

  // service - computed: true, optional: false, required: false
  private _service = new DataConsulCatalogServiceServiceList(this, "service", false);
  public get service() {
    return this._service;
  }

  // tag - computed: false, optional: true, required: false
  private _tag?: string; 
  public get tag() {
    return this.getStringAttribute('tag');
  }
  public set tag(value: string) {
    this._tag = value;
  }
  public resetTag() {
    this._tag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagInput() {
    return this._tag;
  }

  // query_options - computed: false, optional: true, required: false
  private _queryOptions = new DataConsulCatalogServiceQueryOptionsList(this, "query_options", true);
  public get queryOptions() {
    return this._queryOptions;
  }
  public putQueryOptions(value: DataConsulCatalogServiceQueryOptions[] | cdktf.IResolvable) {
    this._queryOptions.internalValue = value;
  }
  public resetQueryOptions() {
    this._queryOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryOptionsInput() {
    return this._queryOptions.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      datacenter: cdktf.stringToTerraform(this._datacenter),
      filter: cdktf.stringToTerraform(this._filter),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      tag: cdktf.stringToTerraform(this._tag),
      query_options: cdktf.listMapper(dataConsulCatalogServiceQueryOptionsToTerraform, true)(this._queryOptions.internalValue),
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
      filter: {
        value: cdktf.stringToHclTerraform(this._filter),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tag: {
        value: cdktf.stringToHclTerraform(this._tag),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      query_options: {
        value: cdktf.listMapperHcl(dataConsulCatalogServiceQueryOptionsToHclTerraform, true)(this._queryOptions.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DataConsulCatalogServiceQueryOptionsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
